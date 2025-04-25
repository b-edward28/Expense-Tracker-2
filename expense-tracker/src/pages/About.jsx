import React from 'react';

function About() {
    return (
        <div className="container mt-5">
            <div
                className="card bg-light text-dark shadow-sm p-5 rounded-4"
                style={{ background: 'linear-gradient(135deg, #aab8d9, #c59ccf)' }}
            >
                <h2 className="text-center fw-bold mb-4">About PesaTracker</h2>

                <p className="text-center fs-5 mb-4">
                    PesaTracker is your all-in-one solution to monitor spending, stay within your budget,
                    and take charge of your financial health.
                </p>

                <div className="mb-4">
                    <h4 className="fw-semibold">Our Purpose</h4>
                    <p>
                        Managing your money shouldn't be stressful. PesaTracker was created to simplify personal finance
                        by helping you track your daily expenses, categorize them, and understand where your money goes.
                        With this insight, you can make smarter decisions and stay financially fit.
                    </p>
                </div>

                <div className="mb-4">
                    <h5 className="fw-semibold">Features</h5>
                    <ul className="list-unstyled">
                        <li>Set and manage your monthly budget</li>
                        <li>Track daily expenses with ease</li>
                        <li>Get alerts when you exceed your budget</li>
                        <li>Categorize your expenses for better insights</li>
                        <li>Delete expenses with a single click</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h5 className="fw-semibold">Get Started</h5>
                    <p>
                        Start your journey to financial freedom today!<br />
                        Download the app and take control of your finances.
                    </p>
                </div>

                <div className="row text-center mb-4">
                    <div className="col-md-6 mb-3">
                        <h5 className="fw-semibold">Contact Us</h5>
                        <p>
                            Have questions or feedback? Reach out to us at
                            <br />
                            <a href="mailto:pesatracker@gmail.com">pesatracker@gmail.com</a>
                        </p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h5 className="fw-semibold">Follow Us</h5>
                        <p>
                            Stay updated with the latest news and features:
                        </p>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-2">Facebook</a> |
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">Twitter</a> |
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ms-2">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <p className="fst-italic">
                        PesaTracker is built for you. Stay organized, stay aware, and stay on track.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
