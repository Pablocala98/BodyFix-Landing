import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
    return (
        <div className="privacy-page">
            <Navbar />
            <div className="privacy-content">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <div className="privacy-text">
                        <p>At BodyFix, we value your privacy and are committed to protecting the personal information you may provide through this website. This policy explains how we collect, use, and protect your data.</p>
                        <h3>1. Data Controller</h3>
                        <p>The data controller of the personal information collected on this website is BodyFix.</p>
                        <h3>2. Information We May Collect</h3>
                        <p>We may collect the following information through contact forms:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number (optional)</li>
                            <li>Message or inquiry</li>
                        </ul>
                        <br />
                        <h3>3. Purpose of Data Processing</h3>
                        <p>The information is collected solely for the purpose of:</p>
                        <ul>
                            <li>Responding to user inquiries</li>
                            <li>Providing information about our services</li>
                            <li>Improving customer service</li>
                        </ul>
                        <br />
                        <h3>4. Legal Basis</h3>
                        <p>We process your data based on the consent you give when submitting a contact form.</p>
                        <h3>5. Sharing of Information</h3>
                        <p>We do not share your personal information with third parties, except when required by law or for strictly operational purposes (e.g., service providers acting on our behalf, such as email platforms).</p>
                        <h3>6. Data Retention</h3>
                        <p>We will retain your personal data only as long as necessary to fulfill the purposes for which it was collected or as required by law.</p>
                        <h3>7. Information Security</h3>
                        <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or destruction.</p>
                        <h3>8. User Rights</h3>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access</li>
                            <li>Rectify</li>
                            <li>Delete</li>
                            <li>Object</li>
                            <li>Withdraw your consent</li>
                        </ul>
                        <br />
                        <p>To exercise your rights, please contact us at: [help@bodyfix.com]</p>
                        <h3>9. Policy Changes</h3>
                        <p>We reserve the right to modify this policy at any time. We encourage you to review it periodically.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy; 