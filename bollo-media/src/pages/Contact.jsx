export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Get in Touch</h1>
      <p style={styles.subtitle}>
        We'd love to hear from you. Let’s collaborate and create something amazing together.
      </p>

      <div style={styles.formContainer}>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input type="text" placeholder="Enter your name" style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input type="email" placeholder="Enter your email" style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone (optional)</label>
            <input type="tel" placeholder="Enter your phone number" style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea placeholder="Type your message here..." style={styles.textarea}></textarea>
          </div>

          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        <div style={styles.infoBox}>
          <h2 style={styles.infoTitle}>Contact Information</h2>
          <p style={styles.infoText}><strong>Email:</strong> mediabollo@gmail.com</p>
          <p style={styles.infoText}><strong>Phone:</strong> 071 133 5187</p>
          <p style={styles.infoText}>Follow us on social media for updates and behind-the-scenes content.</p>
          <div style={styles.socials}>
            <a href="#" style={styles.socialLink}>Facebook</a>
            <a href="#" style={styles.socialLink}>Instagram</a>
            <a href="#" style={styles.socialLink}>YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "50px",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "50px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  form: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "450px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "0.9rem",
    color: "#444",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  infoBox: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "400px",
    textAlign: "left",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  infoTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
  },
  infoText: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
  },
  socials: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
  },
  socialLink: {
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
};

// Add hover effects dynamically
styles.button[":hover"] = { backgroundColor: "#333" };
styles.socialLink[":hover"] = { color: "#555" };








































// export default function Contact() {
//   return (
//     <div className="p-10 text-center">
//       <h1>Contact Us</h1>
//       <p>We’d love to hear from you — get in touch with our team today.</p>
//     </div>
//   );
// }
