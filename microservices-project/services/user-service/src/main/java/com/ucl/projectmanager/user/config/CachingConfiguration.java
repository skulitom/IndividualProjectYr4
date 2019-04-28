package com.ucl.projectmanager.user.config;

import com.google.common.cache.CacheBuilder;
import org.springframework.cache.Cache;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.CacheManager;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.cache.annotation.EnableCaching;

import java.util.concurrent.TimeUnit;


@Configuration
@EnableCaching
public class CachingConfiguration extends CachingConfigurerSupport {

    public static final String PROJECTS_CACHE = "projects";

    @Bean
    @Override
    public CacheManager cacheManager() {

        return new ConcurrentMapCacheManager() {

            @Override
            protected Cache createConcurrentMapCache(final String name) {
                return new ConcurrentMapCache(name, CacheBuilder.newBuilder()
                        .expireAfterWrite(35, TimeUnit.MINUTES)
                        .maximumSize(150).build().asMap(), false);
            }
        };
    }
}