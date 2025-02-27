# 🛠️ Project Roadmap

## User actions

- [ ] User can create an account
- [ ] Each user can create multiple buckets
- [ ] User can see how many buckets it has
- [ ] User can see how many objects are on each bucket
- [ ] User can see the size of each object
- [ ] User can delete objects and buckets
- [ ] User has a dashboard for monitoring: remaining space, heavier buckets, last added objects
- [ ] User can transfer objects and buckets to another user
- [ ] User can add a security layer by adding required password for entering a bucket
- [ ] User can share a public bucket via url
- [ ] User can alternate between public and private buckets, private by default

## App actions

- [ ] When user registers, the program creates a master bucket with a uuid attached to the user and stored in sqlite
- [ ] For each bucket the user creates, it will be created at user's master bucket
- [ ] Program compresses the object, gives a uuid and stores it in the indicated bucket
