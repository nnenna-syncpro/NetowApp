<template>
    <div class="ourServices">
        <div>
            <h4>What We Can Do</h4>
        </div>
        <div class="serviceItems">
            <service-item>Automated Testing</service-item>
            <service-item>Agile Testing</service-item>
            <service-item>DevOps</service-item>
            <service-item>API Testing</service-item>
            <service-item>Dedicated QA Team</service-item>
            <service-item>Mobile Testing</service-item>
            <service-item>Performance Testing</service-item>
            <service-item>Manual Testing</service-item>
            <service-item>QA Outsourcing</service-item>
            <service-item>Full Circle Testing</service-item>
            <service-item>Web Testing</service-item>
            <service-item>Functional Testing</service-item>
            <service-item>QA Consulting Testing</service-item>
            <service-item>Mobile Automation Testing</service-item>
            <service-item>Automated Testing</service-item>
        </div>
    </div>
</template>

<script>
import ServiceItem from "./ServiceItem.vue";

export default {
    components: {
        ServiceItem
    }
}
</script>

<style scoped>
.ourServices {
    background-color: rgba(248, 245, 242, 0.97);
    padding: 80px 200px;

}

h4 {
    font-size: 24px;
    margin-bottom: 8px;
    padding: 0px 95px;
}

.serviceItems {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media screen and (max-width: 752px) {
    /* .serviceItems {
        justify-content: flex-start;
        flex-grow: 2;
    } */

    h4 {
        padding: 0;
    }

    .ourServices {
        padding: 80px 80px;
    }

}

@media (min-width: 752px) and (max-width: 852px) {
    .ourServices {
        /* 130px padding breaks @811; 120px padding breaks @791; 110px padding breaks @711; 100px padding breaks @751;*/
        padding: 80px 100px;
    }

    h4 {
        padding: 0 40px;
    }
}

@media (min-width: 852px) and (max-width: 952px) {
    .ourServices {
        /* 150px padding breaks @851; */
        padding: 80px 150px;
    }

    h4 {
        padding: 0 25px;
    }
}

@media (min-width: 952px) and (max-width: 1120px) {
    .ourServices {
        /* 150px padding breaks @851; */
        padding: 80px 130px;
    }

    h4 {
        padding: 0 25px;
    }
}

@media (min-width: 1120px) and (max-width: 1230px) {
    .ourServices {
        padding: 80px 150px;
    }

    h4 {
        padding: 0 25px;
    }
}
</style>