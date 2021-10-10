async function post(uri, body) {
    const resolve = await fetch(`/api/${uri}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const { status } = resolve;
    const json = await resolve.json();
    return { json, status };
}

async function get(uri, query) {
    const query_string = query
        ? `?${Object.keys(query)
            .reduce((prev, curr) => [...prev, `${curr}=${query[curr]}`], [])
            .join('&')}`
        : '';
    const resolve = await fetch(`/api/${uri}${query_string}`, {
        method: 'GET',
    });
    const { status } = resolve;
    const json = await resolve.json();
    return { json, status };
}

async function put(uri, body) {
    const resolve = await fetch(`/api/${uri}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const { status } = resolve;
    const json = await resolve.json();
    return { json, status };
}

async function del(uri, body) {
    const resolve = await fetch(`/api/${uri}`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        mode: 'cors',
    });
    const { status } = resolve;
    const json = await resolve.json();
    return { json, status };
}

async function patch(uri, body) {
    const resolve = await fetch(`/api/${uri}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const { status } = resolve;
    const json = await resolve.json();
    return { json, status };
}

export { post, get, put, del, patch };
