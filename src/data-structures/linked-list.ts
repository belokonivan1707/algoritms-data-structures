interface ListNode {
    value: any;
    next: ListNode | null;
}

export default class LinkedList {
    head: ListNode | null;
    length: number;

    constructor(value: any) {
        this.head = {
            value: value,
            next: null
        };
        this.length = 1;
    }

    append(value: any): void {
        
    }
}

