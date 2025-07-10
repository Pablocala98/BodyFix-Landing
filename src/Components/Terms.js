import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
    return (
        <div className="terms-page">
            <Navbar />
            <div className="terms-content">
                <div className="container">
                    <h1>Terms and Conditions</h1>
                    <div className="terms-text">
                        <p>Welcome to BodyFix. By accessing and using this website you agree to be bound by the following Terms and Conditions of Use. If you do not agree with any of these terms, please do not use our website.</p>
                        <h3>1. Acceptance of Terms</h3>
                        <p>Access to this website implies full and unconditional acceptance of these Terms and Conditions. We reserve the right to modify them at any time. We recommend reviewing this page regularly to stay informed of any changes.</p>
                        <h3>2. Description of the Service</h3>
                        <p>BodyFix is a platform that connects users with professional at-home massage therapists. Through this website, you can:</p>
                        <ul>
                            <li>Learn more about the services offered by the app.</li>
                            <li>Download the app from the App Store or Google Play.</li>
                            <li>Contact our support or customer service team.</li>
                        </ul>
                        <br />
                        <p>The booking of services is conducted exclusively through the mobile app and is subject to additional terms.</p>
                        <h3>3. Intellectual Property</h3>
                        <p>All content on this website (texts, logos, graphics, images, videos, and software) is the property of BodyFix or its licensors and is protected by intellectual property laws. Reproduction, distribution, or modification without prior written authorization is prohibited.</p>
                        <h3>4. Third-Party Links</h3>
                        <p>This site may contain links to third-party websites. BodyFix is not responsible for the content or privacy practices of such websites. Accessing them is at your own risk.</p>
                        <h3>5. Disclaimer of Liability</h3>
                        <p>This website is provided "as is" and "as available." We do not guarantee that the site will be free from errors or interruptions. BodyFix shall not be held liable for any direct or indirect damages resulting from the use or inability to use the website.</p>
                        <h3>6. Proper Use</h3>
                        <p>Users agree to use this website lawfully and respectfully. It is prohibited to:</p>
                        <ul>
                            <li>Use the site for illegal or unauthorized purposes.</li>
                            <li>Introduce viruses or any element that could damage the site or other users.</li>
                            <li>Access restricted areas without authorization.</li>
                        </ul>
                        <br />
                        <h3>7. Data Protection</h3>
                        <p>Browsing this website does not require you to provide personal data. However, if information is collected through contact forms, it will be handled according to our Privacy Policy.</p>
                        <h3>8. Governing Law</h3>
                        <p>These Terms and Conditions are governed by the laws of the Republic of Argentina. Any dispute arising shall be submitted to the competent courts of the City of Buenos Aires.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms; 