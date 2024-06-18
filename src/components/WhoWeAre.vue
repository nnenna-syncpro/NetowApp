<template>
    <div class="row">
        <img src="../assets/img/who-we-are-collage.png" alt="">
        <div class="column">
            <h3>Who We Are</h3>
            <p class="lg">We Test & Analyse Till It's Bug Free</p>
            <p class="sm">
                <small>
                    Netow Solutions is an independent quality assurance and software testing company in Nigeria. As a
                    software testing company, we enable our clients to increase both the quality of the software they
                    produce and the efficiency of test delivery by optimizing their testing processes.
                </small>
            </p>
            <base-button>Our Services</base-button>

        </div>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    padding: 80px 64px;
    background-color: rgba(248, 245, 242, 0.97);
}

img {
    padding: 48px 0px;
    padding-bottom: 24px;
    width: 100%;
    height: auto;
}

.column {
    padding: 48px;

}

.lg {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
}

.sm {
    margin-bottom: 16px;
    padding-bottom: 24px;
    color: #6c757d;
    font-size: 20px;
    line-height: 1.2;

}

h3 {
    font-size: 12px;
    margin-bottom: 8px;
}

button {
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    color: black;
    border: 1px solid #dee2e6;
    border-color: black;
    border-radius: 8px;
    display: inline-block;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    padding: 6px 12px;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    text-decoration: none;

    /* position on image */

}

:slotted(button) {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* button:hover,
button:active,
button:active {
    background-color: rgba(255, 255, 255, 0.85);
    border: 1px solid #dee2e6;
    border-color: black;
    color: black;
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;
    display: inline-block;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    padding: 6px 12px;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
} */

@media (max-width: 1045px) {
    .row {
        flex-direction: column;
    }
}
</style>