/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { homePage_data } from "@/components/features/home/data";
import { useRouter } from "next/navigation";
import Hero from "@/components/features/home/Hero";
import Capsules from "@/components/features/home/Capsules";
import CTA from "@/components/features/home/CTA";

jest.mock("next/navigation");

describe("Hero component", () => {

  it("renders hero content and handles button click", () => {

    const mockPush = jest.fn();

    const { hero } = homePage_data;

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<Hero />);

    const descriptionText = "Explore the cosmos with our stunning collection of rockets and capsules! Immerse yourself in the extraordinary world of space exploration as we showcase an array of meticulously crafted spacecraft. From iconic rocket launches to intricate space capsules, our website offers a visual feast for enthusiasts and curious minds alike.";

    expect(screen.getByText(hero.title)).toBeInTheDocument();

    expect(screen.getByText(new RegExp(descriptionText.trim()))).toBeInTheDocument();

    fireEvent.click(screen.getByText("SEARCH CAPSULE"));

    expect(mockPush).toHaveBeenCalledWith("/explore");

  });

  test('renders Capsules component with correct content', () => {

    render(<Capsules />);
  
    const { capsules } = homePage_data;

    const descriptionText = "Our rockets and capsules are engineered for precision and speed. Glide through the exosphere with cutting-edge technology and futuristic design, setting a new standard in space exploration.";

    const titleElement = screen.getByText(capsules.title);

    const descriptionElement = screen.getByText(descriptionText);
  
    expect(titleElement).toBeInTheDocument();

    expect(descriptionElement).toBeInTheDocument();
    
  });

  test('renders CTA component with correct content', () => {

    const mockPush = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<CTA />);
  
    const { cta } = homePage_data;

    const descriptionText = "Ready to make history? Choose from our collection of rockets and capsules and make your reservation now. The universe awaits – start your journey with us!";

    const titleElement = screen.getByText(cta.title);

    const descriptionElement = screen.getByText(descriptionText);

    const buttonElement = screen.getByText('GET STARTED');
  
    expect(titleElement).toBeInTheDocument();

    expect(descriptionElement).toBeInTheDocument();
  
    fireEvent.click(buttonElement);

    expect(mockPush).toHaveBeenCalledWith('/explore');

  });

});
