# Store Sphere

![Store Sphere Banner](https://via.placeholder.com/1200x400)

**Store Sphere** is an open-source file storage solution built with **SvelteKit**. It allows users to organize their files into buckets, manage objects securely, and monitor their storage usage through an intuitive dashboard. Whether you're an individual or a team, Store Sphere makes file management simple and efficient.

---

## ✨ Features

- **User-Friendly Dashboard**: Monitor your storage usage, view recent activity, and manage your buckets effortlessly.
- **Secure File Storage**: Each bucket can be protected with a password for added security.
- **Public & Private Buckets**: Share files publicly via a URL or keep them private by default.
- **Object Management**: Upload, download, and delete objects with ease.
- **Bucket Transfers**: Transfer buckets and objects to other users seamlessly.
- **Compression & UUIDs**: Objects are compressed and assigned unique IDs for efficient storage and retrieval.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- SQLite (for local storage)
- Git (for cloning the repository)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/store-sphere.git
   cd store-sphere
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   - Run the following command to initialize the SQLite database:
     ```bash
     npm run migrate
     ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

---

## 🛠️ Project Roadmap

### User Actions

- [ ] User can create an account
- [ ] Each user can create multiple buckets
- [ ] User can see how many buckets they have
- [ ] User can see how many objects are in each bucket
- [ ] User can see the size of each object
- [ ] User can delete objects and buckets
- [ ] User has a dashboard for monitoring: remaining space, heavier buckets, last added objects+- [x] User can transfer objects and buckets to another user
- [ ] User can add a security layer by requiring a password to access a bucket
- [ ] User can share a public bucket via URL
- [ ] User can alternate between public and private buckets (private by default)

### App Actions

- [ ] When a user registers, the program creates a master bucket with a UUID attached to the user and stored in SQLite.
- [ ] For each bucket the user creates, it will be created within the user's master bucket.
- [ ] The program compresses the object, assigns a UUID, and stores it in the indicated bucket.

---

## 🤝 Contributing

We welcome contributions from the community! If you'd like to contribute to **Store Sphere**, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Please ensure your code follows our [contribution guidelines](CONTRIBUTING.md).

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **SvelteKit** for providing a powerful framework for building web applications.
- **Tailwind CSS** for making styling a breeze.
- **PostgreSQL** for efficient database management.

---

## 📧 Contact

Have questions or feedback? Feel free to reach out:

- **Email**: your-email@example.com
- **GitHub Issues**: [Open an Issue](https://github.com/your-username/store-sphere/issues)
- **Discord**: Join our [Discord Server](https://discord.gg/your-invite-link)

---

Thank you for checking out **Store Sphere**! We hope it simplifies your file storage needs. 🌟
