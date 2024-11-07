export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const description = document.createElement('p');
    description.textContent = 'Feel free to get in touch for reservations or inquiries.';
  
    content.appendChild(headline);
    content.appendChild(description);
}
  