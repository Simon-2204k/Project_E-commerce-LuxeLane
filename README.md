# Luxelane E-commerce

# Project Implementation Details

1. **Project Setup**
   - Bootstrapped using **Vite + React** for fast development.  
   - **Tailwind CSS** for responsive, consistent styling.  
   - **React Router DOM** for page routing (Home, Product Details, Cart, Wishlist, Login).  
   - **Redux Toolkit with redux-thunk** for global state management (products, cart, wishlist).  
   - **GSAP** for smooth animations and page transitions.  
   - **Mock API** created using `json-server` to simulate backend product data.

2. **Folder Structure**
   - `src/components` → Reusable components: Navbar, Footer, ProductCard, Buttons, Modals.  
   - `src/pages` → Pages: Home, Product Details, Cart, Wishlist, Login.  
   - `src/feature` → Redux slices: `cartSlice.js`, `wishlistSlice.js`, `productSlice.js`.  
   - `src/assets` → Images, logos, icons.

3. **Navbar**
   - Fixed, responsive design with logo, category links, search bar, cart/wishlist icons, and login button.  
   - Cart and wishlist counts dynamically linked to Redux state.  
   - Search input filters products in real-time.

4. **Home Page**
   - Hero banner with GSAP entrance animations.  
   - Product listing dynamically rendered from mock API using reusable ProductCard components.  
   - Category filters allow dynamic filtering.  
   - Real-time search functionality updates product list instantly.  
   - Hover effects and shadows enhance UI feedback.

5. **Product Card Component**
   - Displays product image, title, price, rating, add-to-cart, and wishlist buttons.  
   - Hover animations using CSS `transform` and `scale`.  
   - Add-to-cart and wishlist dispatch Redux actions to update global state.  
   - Fully reusable across Home and Category pages.

6. **Product Details Page**
   - Dynamic routing based on product ID.  
   - Displays image gallery, price, description, units available, and reviews.  
   - Quantity selector with plus/minus buttons.  
   - Tabbed sections: Description, Shipping, Reviews.  
   - Add-to-cart and wishlist buttons connected to Redux actions.  
   - GSAP animations for smooth transitions and interactive content.

7. **Cart Page**
   - Lists all items from Redux state.  
   - Users can increase/decrease quantity or remove items.  
   - Subtotal, discount, and total calculations update dynamically.  
   - Cart persists using **localStorage** for session persistence.  
   - Checkout button included (placeholder).

8. **Wishlist Page**
   - Displays favorite items added by the user.  
   - Remove items functionality included.  
   - Wishlist count synced with Navbar.  
   - Wishlist state persisted in localStorage.

9. **Login Page**
   - Built using **React Hook Form** for controlled form state and validation.  
   - Fields: name, username, email with validation rules.  
   - Updates simple auth state in Redux (mock login).  
   - Prevents invalid form submission.

10. **Global State Management (Redux Toolkit)**
    - `productSlice` → fetching and storing products from mock API.  
    - `cartSlice` → add/remove items, quantity updates, total calculation.  
    - `wishlistSlice` → manages favorite items.  
    - State persists in localStorage.  
    - Async thunks handle API calls.

11. **API Integration**
    - Products fetched from **mock API** using `json-server`.  
    - Mock API simulates backend endpoints for full control over data.  
    - API response stored in Redux state and rendered dynamically.  
    - Includes loading and error handling for better UX.

12. **Styling & Responsiveness**
    - Tailwind CSS for responsive layouts across mobile, tablet, and desktop.  
    - Hover effects, transitions, gradients, and shadows applied to UI components.  
    - Flexbox and grid used for adaptive product grids.  
    - Hero section, product cards, and buttons maintain consistent design.

13. **Animations (GSAP)**
    - Animations applied to hero banner, product cards, and page transitions.  
    - Smooth fade-ins, scaling, and staggered animations improve interactivity.  
    - ScrollTrigger used for viewport-based animations.

14. **LocalStorage Persistence**
    - Cart and wishlist data saved in localStorage.  
    - Redux slices initialize state from localStorage on page load.  
    - Ensures consistent user experience across sessions.

15. **Deployment**
    - Project ready to deploy on **Netlify or Vercel**.  
    - Build command: `npm run build` generates optimized production files.  
    - Live demo link can be shared for evaluation and showcase purposes.

16. **Testing & Debugging**
    - Manual testing ensures all buttons, links, and inputs work.  
    - Edge cases (empty cart, invalid forms, API errors) handled gracefully.  
    - Redux DevTools used for debugging state changes.

17. **Challenges & Learning**
    - Managing complex global state for cart, wishlist, and products.  
    - Dynamic routing for Product Details required careful parameter handling.  
    - GSAP animations needed experimenting with timelines and ScrollTrigger.  
    - Advanced Tailwind CSS techniques for responsive design.  
    - Learned integration of mock API with Redux state management.

18. **Outcome**
    - Fully functional, professional-grade e-commerce website.  
    - Responsive design ensures usability on all devices.  
    - Dynamic product listing, category filters, search, cart, wishlist, and login demonstrate practical frontend skills.  
    - Mock API and GSAP animations improve realism and interactivity.  
    - Demonstrates expertise in modern frontend development, state management, and responsive design.


