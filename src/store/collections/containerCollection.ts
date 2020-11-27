import Container from "@/store/models/container";
import { container } from "@/store/interfaces/interfaces";

class ContainerCollection {
    containers: Array<Container> = [];

    set(containers: Array<container>) {
        this.containers = [];
        this.push(containers);
    }

    push(containers: Array<container>): void {
        containers.forEach(container => {
            const findContainer = this.find(container.id);
            const index = this.containers.indexOf(findContainer);
            if (index > -1) {
                this.containers.splice(index, 1);
            }

            this.containers.push(new Container(container));
        });
    }

    find(id: string): Container {
        return this.containers.filter(container => {
            return container.data.id === id;
        })[0];
    }

    all(): Array<container> {
        return this.containers.map(container => {
            return container.data;
        });
    }
}

export default ContainerCollection;
