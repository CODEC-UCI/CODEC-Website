
export function getQueryParam(paramname) {
  const params = new URLSearchParams(document.location.search);
  const eventId = parseInt(params.get(paramname));
  return param;
}

export async function loadEvent(id) {
  const events = await fetch('events/events.json').then(r => r.json()).catch(err=> console.log(err))
  const currentEvent = events.find((ev) => ev.id === eventId);

  if(currentEvent === undefined) {
    // defaultvalues here
    return {
      id: "",
      title: "",
      //etc.
    }
  };

  return currentEvent
}