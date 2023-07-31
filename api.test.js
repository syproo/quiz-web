const request = require("supertest")
const app = require("./api") // Replace with the path to your Express app file

let students = []

describe("API Tests", () => {
  let studentId
  // Clear the 'students' array before running tests
  beforeEach(() => {
    students = []
  })
  // Test GET all students
  it("should get all students", async () => {
    const response = await request(app).get("/api/students")
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
  })

  // Test POST student
  it("should create a new student", async () => {
    const newStudent = { id: 1, name: "John Doe" }
    const response = await request(app).post("/api/students").send(newStudent)
    expect(response.status).toBe(201)
    expect(response.body).toEqual(newStudent)
    studentId = response.body.id // Store the ID for further tests
  })

  // Test PUT student
  it("should update an existing student", async () => {
    const updatedStudent = { id: studentId, name: "Jane Doe" }
    const response = await request(app)
      .put(`/api/students/${studentId}`)
      .send(updatedStudent)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(updatedStudent)
  })

  // Test DELETE student
  it("should delete an existing student", async () => {
    const response = await request(app).delete(`/api/students/${studentId}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: "Student deleted successfully." })
  })

  // Test GET one student
  it("should get a single student", async () => {
    const response = await request(app).get(`/api/students/0`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ id: 0, name: "John Marry" })
  })
})
