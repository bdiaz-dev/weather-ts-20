import {
  cleanup, fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Root from '../src/App';
import todayDate from '../src/libs/todayDate';

describe('App should render all components', () => {
  beforeEach(() => { render(<Root />); });
  afterEach(() => { cleanup(); });
  // test('title', async () => {
  //   await waitFor(() => {
  //     expect(screen.getByText('Weather App')).toBeDefined();
  //   });
  // });
  test('date', async () => {
    await waitFor(() => {
      const date = todayDate('en');
      expect(screen.getByText(date)).toBeDefined();
    });
  });
  test('Main actual weather', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('main weather icon')).toBeDefined();
    });
  });
  test('Main actual details', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('max-min svg')).toBeDefined();
      expect(screen.getByAltText('feel svg')).toBeDefined();
      expect(screen.getByAltText('wind svg')).toBeDefined();
      expect(screen.getByAltText('humidity svg')).toBeDefined();
    });
  });
  test('Forecast', async () => {
    await waitFor(() => {
      expect(screen.queryByAltText('forecast weather icon')).toBeDefined();
    });
  });
  test('Cities list', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('citiesList')).toBeDefined();
    });
  });
  // test('Contact form', async () => {
  //   await waitFor(() => {
  //     expect(screen.getByTestId('contactForm')).toBeDefined();
  //   });
  // });
});
describe('User interactions', () => {
  beforeEach(() => { render(<Root />); });
  afterEach(() => { cleanup(); });
  describe('configurations', () => {
    // beforeEach(() => { render(<Root />); });
    // afterEach(() => { cleanup(); });
    test('Change language', async () => {
      const configButton = screen.getByTestId('configButton');
      fireEvent.click(configButton);
      await waitFor(() => {
        const langSwitch = screen.getByTestId('langSwitch');
        fireEvent.click(langSwitch);
      });
      await waitFor(() => {
        const date = todayDate('es');
        expect(screen.getByText(date)).toBeDefined();
      });
      const langSwitch = screen.getByTestId('langSwitch');
      fireEvent.click(langSwitch);
      await waitFor(() => {
        const date = todayDate('en');
        expect(screen.getByText(date)).toBeDefined();
      });
    });
    test('Change Theme', async () => {
      const configButton = screen.getByTestId('configButton');
      fireEvent.click(configButton);
      await waitFor(() => {
        const themeSelector = screen.getByTestId('themeSelector');
        fireEvent.change(themeSelector, { target: { value: 'light' } });
      });
      await waitFor(() => {
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      });
    });
  });
  test('Change city', async () => {
    const cityButton = screen.getByText('London');
    fireEvent.click(cityButton);
    await waitFor(() => {
      const cityTitle = screen.getByTestId('cityTitle');
      expect(cityTitle.innerHTML).toBe('London GB');
    });
  });
  
  test('Open forecast details', async () => {
    await waitFor(() => {
      const forecastElement = screen.getAllByTestId('forecastElement');
      fireEvent.click(forecastElement[0]);
      const forecastDetailsContainer = screen.getByTestId('forecastDetailsContainer');
      expect(forecastDetailsContainer).toBeDefined();
    });
    // await waitFor(() => {
    // });
  });
  test('Form filled can send', async () => {
    const formOpen = screen.getByText('Contact us');
    fireEvent.click(formOpen);
    const nameInput = screen.getByTestId('nameInput');
    const dateInput = screen.getByTestId('dateInput');
    const cityInput = screen.getByTestId('cityInput');
    const emailInput = screen.getByTestId('emailInput');
    const phoneInput = screen.getByTestId('phoneInput');
    const submitButton = screen.getByText('Send');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '1978-01-12' } });
    fireEvent.change(cityInput, { target: { value: 'London' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@london.com' } });
    fireEvent.change(phoneInput, { target: { value: '+33-867768678' } });

    await waitFor(() => {
      expect(submitButton.title).toBe('Send contact request');
    });
  });
});
