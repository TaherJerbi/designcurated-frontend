/* eslint-disable no-undef */
import '../../utils/matchMedia.mock';
import React from "react";
import { BsBookmark } from 'react-icons/bs'
import { render } from "../../utils/test-utils";
import LinkCard from "./LinkCard";

describe('LinkCard', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      text: 'Link',
      url: '/link',
      icon : BsBookmark,
      selected: false
    }
  })

  test('should render name, and icon', () => {
    const {  getByTestId } = render(<LinkCard {...expectedProps}/>)
    // const text = getByText(expectedProps.text)
    const icon = getByTestId(`link-card-icon_${expectedProps.text}_${expectedProps.url}`)

    // expect(text).toBeVisible()
    expect(icon).toBeVisible()
  })
})