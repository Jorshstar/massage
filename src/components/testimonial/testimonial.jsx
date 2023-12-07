import "./testimonial.scss"

const testimonialData = [
  {
    id: 1,
    name: 'James Turner',
    image: 'rita-img5.jfif',
    rating: 5,
    text: "I've been a regular client for the past year, and the quality of service has been consistently excellent. The deep tissue massage is my personal favorite.",
  },
  {
    id: 2,
    name: 'Emily Rodriguez',
    image: 'rita-img5.jfif',
    rating: 4,
    text: "The level of service at Ritas Spa is unparalleled. I've tried various services, but the Thai Massage stands out. It's a truly therapeutic experience that leaves me feeling refreshed and revitalized every time.",
  },
  {
    id: 3,
    name: 'Robert Johnson',
    image: 'rita-img5.jfif',
    rating: 5,
    text: "I've experienced various massages, but Rita Scholl stands out! Her intuitive touch and personalized approach made my session truly rejuvenating. I feel more relaxed and centered than ever. Highly recommend!",
  },
];



const Testimonial = () => {
  return (
    <div id="Testimonials" className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonialData.map((data) => (
          <div key={data.id} className="testimonial-card">
            <div className="testimonial-image">
              <img src={data.image} />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-stars">
                {Array.from({ length: data.rating }, (_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </div>
              <p className="testimonial-text">{data.text}</p>
              <h3>{data.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
