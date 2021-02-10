import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Test Customer",
    email: "testcustomer@test.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Test Customerone",
    email: "customerone@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
