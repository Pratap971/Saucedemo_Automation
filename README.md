# SauceDemo Automation:    
Automation framework for SauceDemo using Playwright (TypeScript) with Page Object Model (POM).    
# Features:    
- POM structure  
- Reusable login using fixtures  
- Data-driven testing (JSON, Excel, CSV, Unified Reader)  
- Tagged tests: @smoke, @regression  
- Parallel execution support    
- HTML reports  
- Test Coverage  
- Login (valid/invalid)  
- Add to cart  
- Cart & checkout flow  
- Product filters (A–Z, Z–A, price low–high, high–low)  
- E2E flow  
# Run Commands:   
- npx playwright test  
- npx playwright test --headed  
- npx playwright test --ui  
- npx playwright test --headed --workers=1  
- npx playwright test --grep "@smoke"  
- npx playwright test --grep "@regression"  
- npx playwright show-report  
# Project Structure:  
/tests  
/fixtures  
/PageObjects  
/utils  
/test-data  
# Notes:  
- Supports parallel execution via Playwright workers  
- Clean and scalable framework design   
