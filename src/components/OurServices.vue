<template>
    <div class="container">
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
.container {
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
</style>