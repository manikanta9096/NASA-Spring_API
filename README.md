# NASA-Spring_API
This Spring Boot application provides an API endpoint to retrieve NASA's Astronomy Picture of the Day (APOD) using the NASA API. It allows users to fetch APOD data based on parameters such as date, start date, end date, count, and whether to include thumbnails.

# Table of Contents
1. Controllers
2. Models
3. Services
4. Main Application
5. Configuration

# Controllers
#NasaApodController

The controllers package contains classes responsible for handling incoming HTTP requests and defining the API endpoints.

    @Autowired
    private  NasaApodService nasaApodService;

    @GetMapping("/apod")
    public
    List<NasaApodResponse> getAPOD ( @RequestParam(required = false) String date,
                                     @RequestParam(required = false) String start_date,
                                     @RequestParam(required = false) String end_date,
                                     @RequestParam(required = false) Integer count,
                                     @RequestParam(required = false) Boolean thumbs ) {
        return nasaApodService.getAPOD(date, start_date, end_date, count, thumbs);
    }
}


# Models
#NasaAPODResponse

The models package includes classes that represent the data structures used in the application, such as APOD objects.

	// Constructors
	public APODResponse() {
	}

	// Getters and Setters public String getDate() { return date; }

	public void setDate(String date) {
		this.date = date;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMediaType() {
		return mediaType;
	}

	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}

	public String getThumbnailUrl() {
		return thumbnailUrl;
	}

	public void setThumbnailUrl(String thumbnailUrl) {
		this.thumbnailUrl = thumbnailUrl;
	}

}


# Services
#NasaApodService

The services package contains classes that handle the business logic of fetching APOD data from the NASA API and processing the requests.
@Service
public class NasaApodService {

    @Value("${nasa.apod.apiKey}")
    private String apiKey;  // You can use an application.properties or application.yml file for configuration.

    @Value("${nasa.apod.baseUrl}")
    private String baseUrl;

    private final RestTemplate restTemplate;

    public NasaApodService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public NasaApodResponse getApodByDate(String date) {
        String apiUrl = baseUrl + "/planetary/apod?api_key=" + apiKey + "&date=" + date;
        return restTemplate.getForObject(apiUrl, NasaApodResponse.class);
    }

    // Add other methods for different APOD retrieval options (start date, end date, count, etc.)
}

# Main Application
#SpringNasaApiApplication

The main application package includes the class with the `main` method to start the Spring Boot application.

	public static void main(String[] args) {
		SpringApplication.run(NasaApiSpringApplication.class, args);
	}

}

# Configuration
#Application.properties

The configuration package may contain classes related to configuring the Spring application, such as properties or security configurations.
nasa.api.key=sIIvSFCJdbdFzoHnjlDB1kZ3BdkhmeVac4rnEmwF
