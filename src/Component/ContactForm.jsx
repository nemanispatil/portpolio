// import React, { useState } from 'react';
// import './ContactForm.css'; // Import the CSS file
// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const submitForm = () => {
//     // Prepare data for Google Sheets
//     const rowData = [name, email];

//     // Call a function to send data to Google Sheets (replace YOUR_GOOGLE_SHEETS_API_KEY and YOUR_SPREADSHEET_ID)
//     sendDataToGoogleSheets(rowData);
//   };

//   const sendDataToGoogleSheets = (data) => {
//     const apiKey = 'YOUR_GOOGLE_SHEETS_API_KEY';
//     const spreadsheetId = 'YOUR_SPREADSHEET_ID';
//     const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

//     const formData = {
//       majorDimension: 'ROWS',
//       values: [data],
//     };

//     // Make a POST request to Google Sheets API
//     fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data sent to Google Sheets:', data);
//         // Optionally, you can show a success message or redirect the user after successful submission.
//       })
//       .catch(error => {
//         console.error('Error sending data to Google Sheets:', error);
//         // Handle error, show an error message, etc.
//       });
//   };

//   return (
//     <div>
//       <section>
//         <h2>Hire Me</h2>
//         {/* Your "Hire Me" content goes here */}
//       </section>

//       <section>
//         <h2>Contact Me</h2>

//         <form>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <button type="button" onClick={submitForm}>Send</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ContactForm;
// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const submitForm = () => {
//     // ... (your existing code)
//   };

//   return (
//     <div>
//       <section style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
//         <h2 style={{ color: '#333' }}>Hire Me</h2>
//         {/* Your "Hire Me" content goes here */}
//       </section>

//       <section style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
//         <h2 style={{ color: '#333' }}>Contact Me</h2>

//         <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', marginTop: '10px' }}>
//           <label style={{ marginBottom: '6px' }} htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             style={{ padding: '8px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
//           />

//           <label style={{ marginBottom: '6px' }} htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ padding: '8px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
//           />

//           <button
//             type="button"
//             onClick={submitForm}
//             style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//           >
//             Send
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ContactForm;











// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const submitForm = () => {
//     // Prepare data for Google Sheets
//     const rowData = [name, email];

//     // Call a function to send data to Google Sheets (replace YOUR_GOOGLE_SHEETS_API_KEY and YOUR_SPREADSHEET_ID)
//     sendDataToGoogleSheets(rowData);
//   };

//   const sendDataToGoogleSheets = (data) => {
//     const apiKey = 'YOUR_GOOGLE_SHEETS_API_KEY';
//     const spreadsheetId = 'YOUR_SPREADSHEET_ID';
//     const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

//     const formData = {
//       majorDimension: 'ROWS',
//       values: [data],
//     };

//     // Make a POST request to Google Sheets API
//     fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data sent to Google Sheets:', data);
//         // Optionally, you can show a success message or redirect the user after successful submission.
//       })
//       .catch(error => {
//         console.error('Error sending data to Google Sheets:', error);
//         // Handle error, show an error message, etc.
//       });
//   };

//   return (
//     <div>
//       <section style={{ float: 'left', width: '50%', padding: '20px' }}>
//         <h2>Hire Me</h2>
//         {/* Your "Hire Me" content goes here */}
//       </section>

//       <section style={{ float: 'left', width: '50%', padding: '20px' }}>
//         <h2>Contact Me</h2>

//         <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', marginTop: '10px' }}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             style={{ padding: '8px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ padding: '8px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '4px' }}
//           />

//           <button
//             type="button"
//             onClick={submitForm}
//             style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//           >
//             Send
//           </button>
//         </form>
//       </section>

//       <div style={{ clear: 'both' }}></div>
//     </div>
//   );
// };

// export default ContactForm;


// import React, { useState } from 'react';
// import './ContactForm.css'; // Import CSS file for styling

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [contact, setContact] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // You can perform form submission logic here
//         console.log(`Name: ${name}, Email: ${email}, Contact: ${contact}`);
//         // Clear the form fields
//         setName('');
//         setEmail('');
//         setContact('');
//     };

//     return (
//       <>


      
//         <div className="contact-form-container">
//             <h2>Hire Me</h2>
//             <form onSubmit={handleSubmit} className="contact-form">
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input 
//                         type="text" 
//                         id="name" 
//                         value={name} 
//                         onChange={(e) => setName(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input 
//                         type="email" 
//                         id="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="contact">Contact:</label>
//                     <input 
//                         type="text" 
//                         id="contact" 
//                         value={contact} 
//                         onChange={(e) => setContact(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
      
//         </div>

//               <div className='line'></div>
//               </>
//     );
// };

// export default ContactForm;
//---------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { google } from 'googleapis';
// import './ContactForm.css'; // Import CSS file for styling

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [contact, setContact] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const auth = new google.auth.GoogleAuth({
//             keyFile: 'Component/credentials/Google-sheet.json',
//             scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//         });
//         const sheets = google.sheets({ version: 'v4', auth });

//         const spreadsheetId = 'contactform-412703'; // ID of your Google Spreadsheet
//         const range = 'Sheet1!A1:C1'; // Range to append data (adjust as needed)
//         const values = [[name, email, contact]];

//         try {
//             const response = await sheets.spreadsheets.values.append({
//                 spreadsheetId,
//                 range,
//                 valueInputOption: 'RAW',
//                 resource: { values },
//             });
//             console.log('Data appended successfully:', response.data);
//             // Clear the form fields
//             setName('');
//             setEmail('');
//             setContact('');
//         } catch (err) {
//             console.error('Error appending data:', err);
//         }
//     };

//     return (
//         <>
//             <div className="contact-form-container">
//                 <h2>Hire Me</h2>
//                 <form onSubmit={handleSubmit} className="contact-form">
//                     <div className="form-group">
//                         <label htmlFor="name">Name:</label>
//                         <input 
//                             type="text" 
//                             id="name" 
//                             value={name} 
//                             onChange={(e) => setName(e.target.value)} 
//                             required 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input 
//                             type="email" 
//                             id="email" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)} 
//                             required 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="contact">Contact:</label>
//                         <input 
//                             type="text" 
//                             id="contact" 
//                             value={contact} 
//                             onChange={(e) => setContact(e.target.value)} 
//                             required 
//                         />
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//             <div className='line'></div>
//         </>
//     );
// };

// export default ContactForm;
//--------------------------------------------------------------------------------------------
import React, { useState } from 'react';
import { google } from 'googleapis';
import './ContactForm.css'; // Import CSS file for styling

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const auth = new google.auth.GoogleAuth({
        keyFile: 'path/to/credentials.json', // Path to your credentials JSON file
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4' });

    const handleSubmit = (e) => {
        e.preventDefault();
        appendData(name, email, contact);
        setName('');
        setEmail('');
        setContact('');
    };

    async function appendData(name, email, contact) {
        const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // ID of your Google Spreadsheet
        const range = 'Sheet1!A1:C1'; // Range to append data (adjust as needed)
        const values = [[name, email, contact]];

        try {
            const response = await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: 'RAW',
                resource: { values },
                auth,
            });
            console.log('Data appended successfully:', response.data);
        } catch (err) {
            console.error('Error appending data:', err);
        }
    }

    return (
        <>
            <div className="contact-form-container">
                <h2>Hire Me</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact:</label>
                        <input 
                            type="text" 
                            id="contact" 
                            value={contact} 
                            onChange={(e) => setContact(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='line'></div>
        </>
    );
};

export default ContactForm;
