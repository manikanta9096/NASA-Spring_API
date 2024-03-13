package com.SpringNasaApi.NasaApiSpring.Model;

public class APODResponse {
    private String date;
    private String explanation;
    private String url;
    private String title;
    private String mediaType; // "image" or "video"
    private String thumbnailUrl; // Useful if mediaType is "video" and thumbs=true

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

    public String getDate() {
        return date;
    }

}