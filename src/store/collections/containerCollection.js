import Container from "@/store/models/container";

class ContainerCollection {
    containers = [];

    push(containers) {
        containers.forEach(container => {
            const findContainer = this.find(container.id);
            const index = this.containers.indexOf(findContainer);
            if (index > -1) {
                this.containers.splice(index, 1);
            }

            this.containers.push(new Container(container));
        });
    }

    find(id) {
        return this.containers.filter(container => {
            return container.data.id === id;
        })[0];
    }

    all() {
        return this.containers.map(container => {
            return container.data;
        });
    }
}

export default ContainerCollection;
