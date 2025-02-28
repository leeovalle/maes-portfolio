import BookingForm from "./BookingForm"

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Book Me</h2>
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0 p-8 rounded-lg border border-gray-800">
          <p className="text-center mb-8">
            Interested in booking me for your event? Fill out the form below and I'll get back to you soon!
          </p>
          <BookingForm />
        </div>
      </div>
    </section>
  )
}

export default Booking
