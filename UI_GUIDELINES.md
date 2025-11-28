# UI Guidelines

This document outlines the UI guidelines and design system for the ShopHub application.

## Layout & Responsiveness

### Spacing System
- **Container Spacing**: Use `.container-spacing` (px-4 sm:px-6 lg:px-8)
- **Section Spacing**: Use `.section-spacing` (py-12 md:py-16 lg:py-20)
- **Grid Gaps**: Standard gap-6 (1.5rem) for card grids
- **Consistent Padding**: Cards use p-6, buttons use px-6 py-2.5

### Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (sm: and md: prefixes)
- **Desktop**: > 1024px (lg: prefix)

### Layout Patterns
- Use `.grid-responsive` for consistent responsive grids
- Max-width containers: `max-w-7xl mx-auto` for main content
- Flexbox for alignment: `flex items-center justify-between`

## Typography & Colors

### Typography Hierarchy
- **H1**: text-4xl md:text-5xl (Page titles)
- **H2**: text-3xl md:text-4xl (Section titles)
- **H3**: text-2xl md:text-3xl (Subsection titles)
- **H4**: text-xl md:text-2xl (Card titles)
- **Body**: text-gray-700 leading-relaxed
- **Small**: text-sm text-gray-600

### Color Palette

#### Primary Colors (Blue)
- Primary-600: Main actions, links, highlights
- Primary-700: Hover states
- Primary-500: Focus rings
- Primary-100: Badges, backgrounds

#### Semantic Colors
- **Success**: Green (confirmations, valid states)
- **Warning**: Yellow (warnings, pending states)
- **Danger**: Red (errors, delete actions)
- **Info**: Blue (information messages)

#### Neutral Colors
- Gray-900: Primary text
- Gray-700: Secondary text
- Gray-600: Tertiary text
- Gray-300: Borders
- Gray-100: Backgrounds
- Gray-50: Subtle backgrounds

## Cards, Lists & Forms

### Cards
- **Base Class**: `.card` - Standard card with shadow and padding
- **Interactive Class**: `.card-interactive` - For clickable cards
- **Hover Effect**: Lift with shadow-lg and translate-y-1
- **Focus State**: Ring-2 ring-primary-500 with offset
- **Transitions**: 300ms ease-in-out

### Buttons
- **Primary**: `.btn-primary` - Main actions
- **Secondary**: `.btn-secondary` - Secondary actions
- **Danger**: `.btn-danger` - Destructive actions
- **States**: Hover, active, focus, disabled
- **Micro-animation**: Scale on hover/active (1.02/0.98)

### Form Elements
- **Input Field**: `.input-field` - Standard input styling
- **Form Label**: `.form-label` - Consistent label styling
- **Required Indicator**: `.form-label-required` - Adds red asterisk
- **Error State**: `.input-error` - Red border and focus ring
- **Success State**: `.input-success` - Green border
- **Validation**: Inline error/success messages

### Form Components
- **FormField**: Wrapper component with label, error, success states
- **LoadingSpinner**: Reusable spinner component (sm/md/lg sizes)
- **Toast**: Notification component with auto-dismiss

## Interactions & Consistency

### Hover States
- **Buttons**: Background color change + scale transform
- **Cards**: Shadow increase + translate up
- **Links**: Color change + underline
- **Duration**: 200ms for smooth transitions

### Focus States
- **All Interactive Elements**: Ring-2 with primary color
- **Ring Offset**: ring-offset-2 for better visibility
- **Keyboard Navigation**: Full support with visible focus indicators

### Micro-animations
- **Fade In**: `.animate-fade-in` - 0.3s ease-in-out
- **Slide Up**: `.animate-slide-up` - 0.3s ease-out
- **Scale In**: `.animate-scale-in` - 0.2s ease-out
- **Slide In**: `.animate-slide-in` - For toasts/notifications

### Transitions
- **Standard**: 200ms ease-in-out
- **Card Animations**: 300ms ease-in-out
- **Transform**: Used for hover/active states

## Component Patterns

### Badges
- `.badge` - Base badge class
- `.badge-primary` - Primary color badge
- `.badge-success` - Success badge
- `.badge-warning` - Warning badge
- `.badge-danger` - Danger badge

### Loading States
- `.loading-spinner` - Standard spinner
- `.skeleton` - Loading placeholder
- Use `LoadingSpinner` component for consistent sizing

### Error Handling
- `.error-message` - Error text with icon
- `.success-message` - Success text with icon
- Inline validation feedback

## Accessibility

### Focus Management
- All interactive elements have visible focus states
- Use `.focus-visible-ring` utility for keyboard-only focus
- Skip links for main content

### ARIA Labels
- Loading spinners have `role="status"` and `aria-label`
- Buttons have descriptive labels
- Form fields have associated labels

### Color Contrast
- Text meets WCAG AA standards
- Focus indicators are clearly visible
- Don't rely solely on color for information

## Best Practices

1. **Consistency**: Use utility classes and components consistently
2. **Responsiveness**: Always test on mobile, tablet, and desktop
3. **Accessibility**: Ensure keyboard navigation and screen reader support
4. **Performance**: Use CSS transitions over JavaScript animations
5. **Maintainability**: Use Tailwind utilities over custom CSS when possible

## Usage Examples

### Card with Hover
```tsx
<div className="card-interactive">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Form Field with Validation
```tsx
<FormField label="Email" required error="Invalid email">
  <input type="email" className="input-field" />
</FormField>
```

### Button with Loading State
```tsx
<button className="btn-primary" disabled={isLoading}>
  {isLoading ? <LoadingSpinner size="sm" /> : 'Submit'}
</button>
```

### Toast Notification
```tsx
<Toast
  message="Product added successfully!"
  type="success"
  isVisible={showToast}
  onClose={() => setShowToast(false)}
/>
```

