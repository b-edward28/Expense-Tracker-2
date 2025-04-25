import React from 'react';

function About() {
    return (
        <div className="container mt -5">
          <div className="card bg-light text-dark shadow-sm p-4 rounded-4" style={{background: 'linear-gradient(135deg, #aab8d9, #c59ccf)'}}>
            <h2 className="text-center fw-bold mb-3">About PesaTracker</h2>
            
            <p className="text-center mb-4">
                PesaTracker is your all-in-one solution to monitor spending, stay within your budget, and take charge of your financial health.
            </p>

            <h4 className="fw-semibold">Purpose</h4>

            <p>
              Managing your money shouldn't be stressful. PesaTracker was created to simplify personal finance by
              helping you track your daily expenses, categorize them, and know exactly where your money goes —
              so you can make smarter decisions and stay financially fit.
            </p>

            <div className= "col-md-6">
                <h5 className="fw-semibold">Features</h5>
                <ul>
                    <li>Track your daily expenses with ease.</li>
                    <li>Set and manage your monthly budget.</li>
                    <li>Receive alerts when you exceed your budget.</li>
                    <li>Categorize your expenses for better organization.</li>
                    <li>Deletes your expenses easily with one click</li>
                </ul>
            </div>

            <div className="text-center mt-4">
                <h5 className="fw-semibold">Get Started</h5>
                <p>
                    Start your journey to financial freedom today! 
                    <br />
                    Download the app and take control of your finances.
                </p>
            </div>

            <div className="text-center mt-4">
                <h5 className="fw-semibold">Contact Us</h5>
                <p>
                    For any questions or feedback, feel free to reach out to us at 
                    <a href="mailto:edwardbrendah28@gmail.com"> edwardbrendah28@gmail.com</a>
                </p>
            </div>
            <div className="text-center mt-4">
                <h5 className="fw-semibold">Follow Us</h5>
                <p>
                    Stay updated with the latest news and features by following us on our social media channels.
                </p>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="text-center mt-4">
                <h5 className="fw-semibold">Privacy Policy</h5>
                <p>
                    Your privacy is important to us. Please read our <a href="/privacy-policy">Privacy Policy</a> to understand how we handle your data.
                </p>
            </div>
            <div className="text-center mt-4">
                <h5 className="fw-semibold">Terms of Service</h5>
                <p>
                    By using PesaTracker, you agree to our <a href="/terms-of-service">Terms of Service</a>.
                </p>
            </div>
            <div className="text-center mt-4">
                <p>
                    Whether you're budgeting for the first time or refining your financial habits. PesaTracker is built for you. Stay organized, stay aware, and stay on track. 
                </p>
            </div>
          </div>


        </div>
    );
}