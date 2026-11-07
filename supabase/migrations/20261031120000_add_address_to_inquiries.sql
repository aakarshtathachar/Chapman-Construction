/*
# Add job address and make email optional on inquiries

1. Changes
- `inquiries.address` (text, optional): the address of the job, which Jerry asks every customer to include
- `inquiries.email` is now optional, since customers may prefer to be reached by phone

2. Important Notes
- Existing rows are unaffected.
*/

ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS address text
  CHECK (address IS NULL OR char_length(address) <= 200);

ALTER TABLE inquiries ALTER COLUMN email DROP NOT NULL;
