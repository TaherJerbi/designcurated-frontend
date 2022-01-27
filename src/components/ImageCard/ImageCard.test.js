/* eslint-disable no-undef */
import React from "react";
import { render } from "../../utils/test-utils";
import ImageCard from "./ImageCard";

describe('ImageCard', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      image: {
        alt_description: "person in blue jacket sitting on brown wooden chair near brown wooden table during daytime",
        description: "Remote Working in Iceland Self-Portrait (See a video tour of this co-working space at YouTube.com/TravelingwithKristin)",
        url: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTQ4NDR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MzI4MzM0Ng&ixlib=rb-1.2.1&q=85"
      },
      user: {
        username: "kristinwilson"
      }}
  })

  test('should render the image, username and description', () => {
    const { getByText, getByAltText } = render(<ImageCard {...expectedProps}/>)
    const username = getByText(expectedProps.user.username)
    const image = getByAltText(expectedProps.image.alt_description)
    const description = getByText(expectedProps.image.description)
    expect(username).toBeVisible()
    expect(image).toBeVisible()
    expect(description).toBeVisible()
  })
})