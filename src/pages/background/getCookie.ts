export const getCookie = chrome?.cookies.getAll(
  {
    domain: "ohoolabs-solution.com",
  },
  function (cookies) {
    for (const cookie of cookies) {
      if (cookie.name === "Authorization") {
        chrome.storage.local.set({ Authorization: cookie.value });
      }
    }
  }
);
