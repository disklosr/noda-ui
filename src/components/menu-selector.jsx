import React from 'react'

function MenuSelector() {
    return (
        <div className="card shadow">
            <div class="card-body">
                <div class="input-group">
                    <select class="form-input input-lg" placeholder="...">
                        <option>noda</option>
                        <option>32blanche</option>
                        <option>vhs</option>
                    </select>
                    <span class="input-group-addon addon-lg">/today</span>
                    <button class="btn btn-primary input-group-btn btn-lg">Submit</button>
                </div>
            </div>
        </div>
    )
}