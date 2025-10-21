# React Components & Hooks Collection

![React Components Screenshot](https://github.com/hamza-elsawy97/25-react/blob/main/25-react.png)

A curated collection of **19 reusable React components and custom hooks** for modern web development.


## 📋 Overview

This repository contains **19 essential React components and custom hooks** that you can easily integrate into any React project. Each component is standalone, well-documented, and production-ready.

## 🛠️ Tech Stack

- **Frontend:** React 18, JavaScript (ES6+)
- **Styling:** CSS Modules, Styled Components
- **State Management:** React Hooks
- **Build Tool:** Vite
- **Testing:** Jest, React Testing Library

## 📁 Components & Hooks

### 🎯 UI Components

#### **Accordion** 
*Collapsible content sections with smooth animations*
- Multiple or single item expansion
- Custom icons and transitions
- Accessible keyboard navigation

#### **Custom Modal Popup**
*Flexible modal dialog system*
- Portal-based implementation
- Custom overlay and animations
- Escape key and backdrop close

#### **Custom Tabs**
*Tabbed interface component*
- Dynamic tab management
- URL hash integration
- Responsive design

#### **Image Slider**
*Carousel with touch support*
- Auto-play functionality
- Touch/swipe gestures
- Custom controls and indicators

#### **Star Rating**
*Interactive rating component*
- Half-star support
- Custom sizes and colors
- Read-only mode

#### **Tic-Tac-Toe**
*Interactive game component*
- Win condition detection
- Game history
- Responsive grid

#### **Tree View**
*Hierarchical data display*
- Expand/collapse nodes
- Checkbox selection
- Dynamic data loading

### 🔧 Utility Components

#### **Scroll Indicator**
*Progress bar showing scroll position*
- Custom colors and height
- Smooth animation
- Performance optimized

#### **Scroll to Top and Bottom**
*One-click navigation buttons*
- Smooth scrolling
- Show/hide on scroll
- Custom positioning

#### **Search Autocomplete with API**
*Real-time search with suggestions*
- Debounced API calls
- Keyboard navigation
- Loading states

#### **QR Code Generator**
*Dynamic QR code creation*
- Customizable size and colors
- Download functionality
- Error correction levels

#### **Random Color Generator**
*Color palette generator*
- HEX, RGB, HSL formats
- Copy to clipboard
- Color history

#### **Load More Data**
*Infinite scroll/pagination component*
- Intersection Observer API
- Loading states
- Error handling

#### **Light Dark Mode**
*Theme switching functionality*
- System preference detection
- Persistent storage
- Smooth transitions

### 🎛️ Feature Management

#### **Feature Flag**
*Feature toggle system*
- Conditional rendering
- User-based flags
- Environment-based toggles

### 🔍 Application Components

#### **GitHub Profile Finder**
*GitHub API integration*
- User profile search
- Repository display
- Error handling

### ⚡ Custom Hooks

#### **useFetch**
*Data fetching abstraction*
- Loading, error, data states
- Automatic cleanup
- Request cancellation

#### **useOutsideClick**
*Detect clicks outside element*
- Modal and dropdown support
- Custom event handlers
- Performance optimized

#### **useWindowResize**
*Window size monitoring*
- Responsive breakpoints
- Debounced updates
- SSR compatible

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/hamza-elsawy97/react-components.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
react-components/
├── src/
│   ├── components/
│   │   ├── Accordion/
│   │   ├── CustomModal/
│   │   ├── CustomTabs/
│   │   └── ... (all components)
│   ├── hooks/
│   │   ├── useFetch/
│   │   ├── useOutsideClick/
│   │   └── useWindowResize/
│   ├── styles/
│   ├── utils/
│   └── App.jsx
├── screenshots/
└── README.md
```

## 💡 Usage Examples

### Using Custom Modal
```jsx
import CustomModal from './components/CustomModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is a custom modal!</p>
      </CustomModal>
    </div>
  );
}
```

### Using useFetch Hook
```jsx
import useFetch from './hooks/useFetch';

function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

## 🔧 Development

```bash
# Run tests
npm test

# Build library
npm run build

# Run storybook for component development
npm run storybook
```

## 📞 Contact

**Hamza Sawy - Full Stack Developer**
- 📧 Email: [hamza.elsawy97@gmail.com](mailto:hamza.elsawy97@gmail.com)
- 💼 Portfolio: [hamzasawy.dev](https://hamzasawy.dev)
- 🔗 LinkedIn: [hamza-elsawy-dev](https://linkedin.com/in/hamza-elsawy-dev)

## 📄 License
Licensed - feel free to use in personal and commercial projects.

---

<div align="center">

### ⭐ **Star this repo if you find these components useful!**
### 🚀 **Ready to elevate your React development!**

**Build better React apps, faster!** 💫

</div>