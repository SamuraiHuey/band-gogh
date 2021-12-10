async function eventFormHandler(event) {
    event.preventDefault();
    console.log('hello');

    const event_name = document.querySelector('#event-name').value.trim();
    const event_month = document.querySelector('#event-month').value.trim();
    const event_day = document.querySelector('#event-day').value.trim();
    const event_year = document.querySelector('#event-year').value.trim();
    const event_location = document.querySelector('#event-location').value.trim();

    if (event_name) {
        const response = await fetch('/api/events/', {
            method: 'post',
            body: JSON.stringify({
                event_name,
                event_month,
                event_day,
                event_year,
                event_location
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/events');
            console.log('yes')
        } else {
            alert(response.statusText);
        }
    }
}

console.log('script running');


document.querySelector('#event-submission-form').addEventListener('submit', eventFormHandler);