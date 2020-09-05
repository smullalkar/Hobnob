import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light justify-content-between">
                <img src='/hobnob.svg' class="navbar-brand" style={{ width: '100px', height: '50px' }} />
                <form class="form-inline">
                    <button class="btn btn-outline-success my-2 my-sm-0">Login</button>
                </form>
            </nav>
        </div>
    )
}
