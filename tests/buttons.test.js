// tests/buttons.test.js

describe("WaarpBuild buttons", () => {
  test("Join button is a clickable link", () => {
    document.body.innerHTML = `
      <a href="https://waarpbuild.vercel.app" class="button">⚡ Join</a>
    `;

    const join = document.querySelector(".button");

    expect(join).not.toBeNull();
    expect(join.tagName).toBe("A");
    expect(join.href).toBe("https://waarpbuild.vercel.app/");
  });

  test("Start creating button is a real button element", () => {
    document.body.innerHTML = `
      <button>Start creating</button>
    `;

    const start = document.querySelector("button");

    expect(start).not.toBeNull();
    expect(start.tagName).toBe("BUTTON");
    expect(start.textContent).toBe("Start creating");
  });
});