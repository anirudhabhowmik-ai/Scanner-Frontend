// CREATE DATABASE creativedeveloper; 
// SHOW DATABASES; 
// DROP DATABASE ecommerce; 
// USE creativedeveloper; 
// CREATE TABLE emp(id INT auto_increment primary key, employee_code VARCHAR(20) unique not null, name VARCHAR(50) not null, salary Decimal(10, 2), date_of_joining DATE not null, status ENUM('ACTIVE', 'INACTIVE') default 'ACTIVE', gender CHAR(10), remarks TEXT); 
// insert into emp(employee_code, name, salary, date_of_joining, status, gender, remarks) values('EMP000', 'Anirudha Bhowmik', 500000.00, '2027-01-20', 'ACTIVE', 'Male', 'I am a Engineer'); 
// DROP table emp;











// | **Stage**    | **Feature**                   | **Description**                           | **Priority**   |
// | ------------ | ----------------------------- | ----------------------------------------- | -------------- |
// | MVP          | Scan Images                   | Upload images from device or camera       | ✅ Must-have    |
// | MVP          | Convert Image → PDF           | Convert uploaded image to PDF             | ✅ Must-have    |
// | MVP          | Merge Multiple Images         | Combine multiple images into a single PDF | ✅ Must-have    |
// | MVP          | Merge Two PDFs                | Merge existing PDFs into one              | ✅ Must-have    |
// | MVP          | Reduce Image/PDF Size         | Compress files before download            | ✅ Must-have    |
// | MVP          | Download PDF/JPG              | Download processed file                   | ✅ Must-have    |
// | MVP          | Share PDF/JPG                 | Share via link or social media            | ✅ Must-have    |
// | Growth       | Split PDF                     | Split a PDF into separate pages           | ⚡ Nice-to-have |
// | Growth       | Reorder PDF Pages             | Change page order before merging          | ⚡ Nice-to-have |
// | Growth       | Rotate PDF Pages              | Rotate individual pages in PDF            | ⚡ Nice-to-have |
// | Growth       | Preview Images                | See thumbnails before merging             | ⚡ Nice-to-have |
// | Growth       | Crop / Resize / Rotate Images | Basic image editing before merging        | ⚡ Nice-to-have |
// | Growth       | Compression Quality Selector  | Low / Medium / High                       | ⚡ Nice-to-have |
// | Growth       | Dark Mode                     | User preference UI feature                | ⚡ Nice-to-have |
// | Monetization | User Accounts                 | Save files, history, preferences          | 💰 Optional    |
// | Monetization | Cloud Storage                 | Save PDFs for later access                | 💰 Optional    |
// | Monetization | Ads-Free Premium              | Paid users don’t see ads                  | 💰 Optional    |
// | Monetization | Watermark Control             | Free: watermark, Paid: remove watermark   | 💰 Optional    |
// | Advanced     | OCR                           | Make PDFs searchable text                 | ⭐ Advanced     |
// | Advanced     | Password-protected PDF        | Add security to PDFs                      | ⭐ Advanced     |
// | Advanced     | PDF → Image                   | Convert PDF pages into images             | ⭐ Advanced     |
// | Advanced     | Batch Processing              | Upload multiple PDFs/images at once       | ⭐ Advanced     |
// | Viral/SEO    | Static SEO Pages              | Separate pages for each tool              | 📈 Optional    |
// | Viral/SEO    | Offline Support (PWA)         | Use site offline                          | 📈 Optional    |
// | Viral/SEO    | Multi-language Support        | Reach global audience                     | 📈 Optional    |
// | Viral/SEO    | One-click Share               | Social sharing for virality               | 📈 Optional    |
