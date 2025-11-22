import React from "react";
import Meta from "../meta/meta.component";

export default function PrivacyPolicy() {
    return (
        <>
            <Meta
                title="Privacy Policy – Petara Corporation"
                description="Read the privacy policy of Petara Corporation to understand how we collect, use, and protect your personal data."
                url="/privacy-policy"
            />

            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">📄 Privacy Policy – Petara Corporation</h1>
                <p className="mb-6">Last Updated: November 2025</p>

                <p className="mb-4">
                    Petara Corporation ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you submit a form, contact us, or interact with our promotional campaigns.
                </p>

                <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                <p className="mb-4">We may collect the following information when you submit a form or contact us:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>City/Location</li>
                    <li>Product requirements</li>
                    <li>Any additional information you voluntarily provide</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Responding to your inquiry</li>
                    <li>Sharing product details, catalogues, and quotations</li>
                    <li>Understanding your requirements</li>
                    <li>Providing support or assistance</li>
                    <li>Contacting you for follow-ups or order discussions</li>
                    <li>Sending relevant updates about our products and services</li>
                </ul>
                <p className="mb-4 font-medium">
                    We do not sell or share your personal data with third parties for marketing purposes.
                </p>

                <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
                <p className="mb-4">We may share your information only with:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Internal team members for processing your request</li>
                    <li>Logistics or vendor partners (only if required to fulfill your order)</li>
                </ul>
                <p className="mb-4">All shared data is handled securely and only for business purposes.</p>

                <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
                <p className="mb-4">We take reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.</p>

                <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
                <p className="mb-4">We retain your information as long as needed to fulfill your request or as required for business and legal purposes.</p>

                <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                <p className="mb-4">You may request:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Access to your personal data</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your data from our records</li>
                </ul>

                <p className="mb-4">To request this, contact us at:</p>
                <p className="mb-2">📩 <strong>petaracorporation@gmail.com</strong></p>
                <p className="mb-6">📞 <strong>8879292103</strong></p>

                <h2 className="text-xl font-semibold mb-2">7. Updates to This Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be effective immediately when posted.</p>

                <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                <p className="mb-2">If you have any questions regarding this policy or our data practices, you can contact us at:</p>
                <p className="mb-1 font-medium">Petara Corporation</p>
                <p className="mb-1">Email: petaracorporation@gmail.com</p>
                <p>Phone: 8879292103</p>
            </div>
        </>
    );
}
