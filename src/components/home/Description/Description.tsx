import styles from './Description.module.sass'
import Image from 'next/image'

const PLACEHOLDER_IMG = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABSAFIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBv/EAB8QAQADAQADAQEBAQAAAAAAAAABAgMhBBExEhNBYf/EABkBAQEBAQEBAAAAAAAAAAAAAAMCBAABBf/EABsRAQEBAQADAQAAAAAAAAAAAAABAhEDITES/9oADAMBAAIRAxEAPwDwvpz0LNVZqfNdqKwLSFIgbODBsHzgzSA8qms6A2vKn5VtBr8cUvQM+r6Q0gvf6c1qV0jrThGgkd9IXqF5qpNTM1DtDHitdgMV6PlXqkR0xjHWmX0HWTOFD2WfAfHr8aGVOQPSA/58C0zaH44DrTgndY+9fpDWGt5NfrM3jpc16WR30hOu4bkKy8yFeWPDU5H0zgViemcJ61ZHqNTxv8aWMchmeNPxp4zx5oGoPEcB2jg0TwHaeCSy/Kj6yvI+y1fKlkeRPVZVAEc9otQk3DtcGdFLXFMkmh4t0zhb4zov0zjcsX9bXjX+NLG/GJ4+nw/lqi0WstT98A2vwH+vPoWuqBWAeVZlbz055F/ftnbW9yTLuqe0U/X/AFFPek/6Ofst+3Ysr8jxvpmtzGVyNZHzsituPbVx0O5asnKxvO4bXtjRjXgempeLqXu6B1E2v7JaW6LpYteT5gNVz2iqL4jrMh2ERVT4/olB80QOn0PGby/w1REBS0WFboj3LPsDQvZEPlm0oiItD//Z'

export const Description = () => {
    return(
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
            <Image 
                src="/images/description.jpeg" 
                alt="products marketplace" 
                fill
                placeholder='blur'
                blurDataURL={PLACEHOLDER_IMG}/>
            </div>
            
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}