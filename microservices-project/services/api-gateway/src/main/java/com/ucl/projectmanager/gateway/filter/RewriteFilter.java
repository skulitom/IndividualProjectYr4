package com.ucl.projectmanager.gateway.filter;

import org.springframework.cloud.netflix.zuul.filters.post.LocationRewriteFilter;
import org.springframework.http.HttpStatus;
import com.netflix.zuul.context.RequestContext;

public class RewriteFilter extends LocationRewriteFilter {

    @Override
    public boolean shouldFilter() {
        RequestContext ctx = RequestContext.getCurrentContext();
        int status = ctx.getResponseStatusCode();
        return HttpStatus.valueOf(status).is3xxRedirection() || HttpStatus.valueOf(status) == HttpStatus.CREATED;
    }
}
