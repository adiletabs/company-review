import React, {FormEvent, ReactElement, useContext} from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Review } from "../../../models/Review";
import ReviewContext from "../../../utils/ReviewContext";

type Props = {
    addReview: (review: Review) => void
};

export default function ReviewAdd({addReview}: Props): ReactElement {

    const authorref = React.useRef<HTMLInputElement>(null);
    const companyref = React.useRef<HTMLInputElement>(null);
    const reviewref = React.useRef<HTMLTextAreaElement>(null);

    function handleSubmit(event: FormEvent<HTMLElement>):void {
        console.log('qwerqwerqwerqe');
        if (companyref.current && reviewref.current &&
            companyref.current.value && reviewref.current.value &&
            authorref.current && authorref.current.value) {
            const review: Review = {id:0,companyName: companyref.current.value, review: reviewref.current.value, likes: 0, author: 'todo'};
            companyref.current.value = '';
            reviewref.current.value = '';
            authorref.current.value = '';
            addReview(review);
        }
        if (reviewref.current) {
            if (!reviewref.current.value) {
                reviewref.current.focus();
            }
        }
        if (companyref.current) {
            if (!companyref.current.value) {
                companyref.current.focus();
            }
        }
        if (authorref.current) {
            if (!authorref.current.value) {
                authorref.current.focus()
            }
        }
    }
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <Form>
            <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author" ref={authorref}/>
        </Form.Group>
            <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company" ref={companyref}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Review" ref={reviewref}/>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Send Review
            </Button>
        </Form>
    );
}
