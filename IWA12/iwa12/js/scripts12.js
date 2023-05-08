const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


// Get all the buttons
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

// Loop through each book and update the buttons based on its status
document.querySelectorAll('.status').forEach((statusElement, index) => {
    const status = statusElement.textContent.trim();
    const statusInfo = STATUS_MAP[status];
  
    // Update the reserve button
    reserveButtons[index].disabled = !statusInfo.canReserve;
    reserveButtons[index].style.color = statusInfo.canReserve ? 'black' : 'gray';
  
    // Update the checkout button
    checkoutButtons[index].disabled = !statusInfo.canCheckout;
    checkoutButtons[index].style.color = statusInfo.canCheckout ? 'black' : 'gray';
  
    // Update the checkin button
    checkinButtons[index].disabled = !statusInfo.canCheckIn;
    checkinButtons[index].style.color = statusInfo.canCheckIn ? 'black' : 'gray';
  
    // Update the status text color
    statusElement.style.color = statusInfo.color;
  } );
  
/*  Sure! The task is to enable/disable buttons based on the status/properties
 in the STATUS_MAP object, and to ensure that the buttons are only black and grayscale. 
 Additionally, the color of the status indicator text should correspond to the values in STATUS_MAP.
 To accomplish this, we can use JavaScript to access the buttons and update their disabled property 
 based on the corresponding values in the STATUS_MAP object. 
 We can also set the color property of the buttons to either 'black' or 'gray' based on whether they are enabled or disabled.
Finally, we can set the color property of the status text to the corresponding color value in the STATUS_MAP object.
 The code provided loops through each book and updates the buttons and status text based on its status.
  It first gets all the buttons using document.querySelectorAll, and then loops through each book
   using document.querySelectorAll('.status').forEach. For each book, it gets the status
    and corresponding status information from STATUS_MAP, and then updates the reserve, checkout, 
    and checkin buttons based on the canReserve, canCheckout, and canCheckIn properties, 
    respectively. It also sets the color property of the buttons to either 'black' or 'gray'
     based on whether they are enabled or disabled. Finally, it sets the color property of
      the status text to the corresponding color value in STATUS_MAP.
*/
