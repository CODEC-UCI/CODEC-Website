

export function card(ev) {
  return (
    `
                        <div class="card-inner">
                            <div class="post-header">
                                <span class="date">${ev.date}</span>
                                ${ev.tag ? `<span class="tag">${ev.tag}</span>` : ''}
                            </div>
                            <h2>${ev.title}</h2>
                            <p class="summary">${ev.summary}</p>
                        </div>
    `
  )
}