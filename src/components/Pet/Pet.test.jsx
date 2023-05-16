import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Pet from "./index";
import { StaticRouter } from "react-router-dom/server";

test("Display a default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.style.backgroundImage.indexOf("url")).toBeTruthy();
  pet.unmount();
});
