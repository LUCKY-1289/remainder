function setupReminder() {
    // Get values from the form
    const reminderTime = document.getElementById('reminderTime').value;
    const reminderChannels = Array.from(document.getElementById('reminderChannels').selectedOptions).map(option => option.value);
    const patientType = document.getElementById('patientType').value;
    const visitType = document.getElementById('visitType').value;

    // Log the values (you can replace this with your actual logic)
    console.log("Reminder Time:", reminderTime);
    console.log("Reminder Channels:", reminderChannels);
    console.log("Patient Type:", patientType);
    console.log("Visit Type:", visitType);

    // You can implement further logic here, such as sending data to a server for processing.
}
