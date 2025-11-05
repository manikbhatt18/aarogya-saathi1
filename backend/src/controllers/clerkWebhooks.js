// import { Webhook } from "svix";
import User from "../Model/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    // ✅ Initialize Svix webhook with secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // ✅ Prepare headers for verification
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // ✅ Verify the payload
    const payload = req.body; // req.body is a raw buffer here
    const evt = whook.verify(payload, headers);

    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || null,
          username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          image: data.image_url,
        };
        await User.create(userData);
        console.log(`✅ User created: ${userData.email}`);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses?.[0]?.email_address || null,
          username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        console.log(`🔄 User updated: ${data.id}`);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log(`🗑️ User deleted: ${data.id}`);
        break;
      }

      default:
        console.log(`ℹ️ Unhandled event type: ${type}`);
        break;
    }

    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
