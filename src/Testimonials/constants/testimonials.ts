interface ITestimonial {
    companyID: string;
    content: string;
    personID: string;
    personName: string;
    personTitle: string;
}

export const testimonials: ITestimonial[] = [
    {
        companyID: "uber",
        content: "Fini has helped us speed up our customer support by automating repetitive tasks and freeing up our support team's time so they can focus on more important issues. I highly recommend Fini to any company that wants to speed up their customer support and improve their bottom line.",
        personID: "person1",
        personName: "John Doe",
        personTitle: "Head of Customer Support, Uber"

    },
    {
        companyID: "google",
        content: "Fini is the best thing to happen to customer support! We've been using it for a while now and it has completely transformed our support experience.",
        personID: "person2",
        personName: "John Doe",
        personTitle: "Customer Services Manager, Google"

    },
    {
        companyID: "lyft",
        content: "Fini has helped us speed up our customer support by automating many of our processes. We're now able to provide a more efficient and effective service to our customers.",
        personID: "person3",
        personName: "John Doe",
        personTitle: "COO, Lyft"
    }, 
    {
        companyID: "zoom",
        content: "Fini has helped us speed up our customer support by automating repetitive tasks. We're now able to provide faster and more efficient support to our customers.",
        personID: "person4",
        personName: "John Doe",
        personTitle: "Head of Customer Support, Zoom"
    }

]