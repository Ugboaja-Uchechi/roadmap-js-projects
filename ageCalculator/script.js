//const dateInput = document.querySelector('#date-picker');

const picker = datepicker('#date-picker',
{
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString(
        'en-GB',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }
      );
      input.value = value;
    }
  }
)

// picker.show();
