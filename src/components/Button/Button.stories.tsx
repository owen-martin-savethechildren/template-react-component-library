import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: "ReactComponentLibrary/Button",
    component: Button,
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const HelloWorld: Story = {
    args: {
        label: "Hello world!",
    },
};

export const ClickMe: Story = {
    args: {
        label: "Click me!",
    },
};
