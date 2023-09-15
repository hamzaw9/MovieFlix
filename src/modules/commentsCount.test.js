import commentsCount from "./commentsCount.js";
import fetchComments from "./fetchComment.js";
jest.mock("./fetchComment.js", () => ({
  __esModule: true,
  default: jest.fn(),
}));
test("commentsCount handles case with no comments available", async () => {
  const commentsCountElement = {textContent: ""};
  document.getElementById = jest.fn(() => commentsCountElement);
  fetchComments.mockResolvedValueOnce(null);
  await commentsCount(456);
  expect(commentsCountElement.textContent).toBe("No comments available");
});