# Upload Flow

1. Admin selects MP3, MIDI, PDF, or artwork in the upload wizard.
2. Client validates file type and captures metadata.
3. Storage service uploads the file.
4. Firestore record is created or updated with the resulting URL.
5. Admin publishes the psalm or project when metadata is complete.
